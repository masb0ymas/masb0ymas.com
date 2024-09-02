---
external: false
draft: false
title: "How to Install React Native on Different Platforms?"
description: "This guide provides a step-by-step tutorial on installing React Native across various platforms, including Windows, macOS, and Linux. It covers the essential prerequisites, such as Node.js, npm, and specific platform dependencies, to ensure a smooth setup process. Learn how to configure development environments using tools like Android Studio and Xcode, and get started with your first React Native project. Perfect for beginners, this guide simplifies the installation process to help you build cross-platform mobile applications quickly."
date: 2024-09-02
tags: ["react-native", "android", "ios", "cli"]
---

There are many ways and tools to develop mobile apps, such as ionic, react-native, flutter, swift, kotlin, and many more. Today, we will use react native for mobile app development.

When you first develop a mobile app with React Native, make sure to install some of the following:

- node
- android studio
- xcode ( for macOS only )

## Setup with NodeJs

If you have never installed NodeJs, we can install it from the official Node Js website: [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager).

We can install with package-manager (nvm) or bundler applications like .dmg for macOS and .exe for windows. After the installation is complete, next we will run the command

```sh
npx react-native@latest init MyApp
```

If you run the command above and we get an error, we can skip the setup and install the pods, by following the following command:

```sh
npx react-native@latest init MyApp --version 0.74.5 --pm npm --install-pods false
```

## Setup with Android Studio

If you have never installed Android Studio on your computer, we must download the Android Studio on Official website.
[https://developer.android.com/studio](https://developer.android.com/studio)

After installation is completed, we will next to download the SDK needed.

![Android SDK](/static/blog/react-native/android-sdk-api.webp)
![Android SDK](/static/blog/react-native/android-sdk-tools.webp)

We need to setup a bash profile or zsh profile for Android Path.

```sh
# android
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

alias adb="$ANDROID_HOME/platform-tools/adb"
```

And then don't forget to install openjdk for Runtime Java. For macOS user we can install with `homebrew`. Command like this:

```sh
brew install openjdk
```

We have to configure the bash profile for OpenJDK

```sh
# openjdk
export PATH="/usr/local/opt/openjdk/bin:$PATH" # for latest version
export PATH="/usr/local/opt/openjdk@17/bin:$PATH" # for version 17
```

Now we can check the react-native prerequisite with command

```sh
npx react-native doctor
```

If no errors occur, the result will be like this:
![React Native Doctor](/static/blog/react-native/react-native-doctor.webp)

## Conclusion

With React Native we can create mobile applications on various platforms both Android and iOS, maybe the next application can run on the web or desktop soon. If you were previously a web developer switching to a React Native developer is not difficult.