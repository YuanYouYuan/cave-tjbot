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
sudo apt-get nodejs
```


