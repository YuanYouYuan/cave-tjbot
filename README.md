# This is cave-version tjbot


## Update rpi

```sh
sudo apt-get update
sudo apt-get dist-upgrade
```

## Set the audio output to 3.5mm jack

```sh
sudo raspi-config
```
"7 Advanced Options" -> "A4 Aduio" -> "1 Force 3.5mm ('headphone') jack" -> "Ok"


## Install nodejs on rpi

```sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install nodejs
```

## To run tjdemo-espeak.js, you may need to install espeak first.

```sh
sudo apt-get install espeak
```

## Clone this project

```sh
git clone https://github.com/YuanYouYuan/cave-tjbot.git
```

## Install node dependencies

```sh
npm install
```

## Run the sample code

```sh
sudo node tjdemo-google.js
```



