fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'OPR X'
description 'Countdown script for turf or war'
version '1.0.0'

ui_page 'html/index.html'

client_scripts {
    'client.lua',
}

shared_scripts {
	'config.lua'
}

files {
    'html/index.html',
    'html/main.js',
    'html/style.css',
}

export 'run'