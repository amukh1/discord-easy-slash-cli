#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import {createSpinner} from 'nanospinner';
import fs from 'fs';
import fetch from 'node-fetch';
import {exec} from 'child_process';


async function main() {
    figlet('SLASH', function(err, data) {
console.log(gradient.pastel.multiline(data))
    });

    setTimeout(() => {
        console.clear();
    const spinner = createSpinner('Loading..').start()

    setTimeout(() => {
      spinner.success({text: 'Done!'})
      go()
    }, 1000)
    // console.log('\n')
    }, 2000)
}

async function go() {
    const response = await inquirer.prompt({
        type:'list',
        name: 'Type',
        message: 'Want to answer?',
        choices: [
'Simple',
'Advanced Handler',
        ]
      }).then(function(a){
        handleAnswer(a)
      })

}

// https://raw.githubusercontent.com/amukh1/discord-easy-slash-cli/main/simple.js
// https://raw.githubusercontent.com/amukh1/discord-easy-slash-cli/main/advanced.js

async function handleAnswer(ans) {
    // console.log(ans.Type)
    if(ans.Type == 'Simple') {
        const res = await fetch('https://raw.githubusercontent.com/amukh1/discord-easy-slash-cli/main/simple.js')
        const text = await res.text()
fs.writeFileSync('./simple.js', text, 'utf8')
    }else if(ans.Type == 'Advanced Handler') {
        const res = await fetch('https://raw.githubusercontent.com/amukh1/discord-easy-slash-cli/main/advanced.js');
        const text = await res.text()
fs.writeFileSync('./advanced.js', text, 'utf8')
fs.mkdirSync('./commands')
    }
chalkAnimation.karaoke('Make sure to run `npm install discord-easy-slash`!')
    setTimeout(() => {  
        process.exit(1)
    }, 4000)
}

main()
