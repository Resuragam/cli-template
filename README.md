# project-tempalte

A project template for front-end.

## eslint

项目地址： https://github.com/eslint/eslint
eslint 是一个代码检测工具，用于检测代码中潜在的问题和错误，作用提高代码质量和规范。

### 安装步骤：

1. 安装 eslint

```shell
npm install eslint
```

2. 构建 eslint.js 文件

```shell
npm init @eslint/config
```

## prettierrc

项目地址： https://github.com/prettier/prettier

```shell
npm install prettier --save-dev
```

## husky

项目地址： https://github.com/typicode/husky

### 常见的钩子

pre-commit：在执行 Git commit 命令之前触发，用于在提交代码前进行代码检查、格式化、测试等操作。
commit-msg：在提交消息（commit message）被创建后，但提交操作尚未完成之前触发，用于校验提交消息的格式和内容。
pre-push：在执行 Git push 命令之前触发，用于在推送代码前进行额外检查、测试等操作。

### 安装步骤：

1. 安装 husky

```shell
npm install husky --save-dev
```

2. 启用 husky

```shell
npm pkg set scripts.prepare="husky install"
```

pre-commit: 在 Git 提交之前做 eslint 语法校验 。

```shell
npx husky add .husky/pre-commit "npm test"
```

git 提交前，执行 pre-commit 钩子脚本，进行校验代码语法、格式修复等操作。
1、打开 pre-commit 文件，内容如下：
```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
```
2、下方代码添加到 pre-commit 文件中。lint-staged 模块， 用于对 git 暂存区检测
```shell
npx --no-install lint-staged
```

## lint-stage

项目地址： https://github.com/okonet/lint-staged
作用：lint-staged 可以让你在 Git 暂存（staged）区域中的文件上运行脚本，通常用于在提交前对代码进行格式化、静态检查等操作。
使用方式：你可以在项目中使用 lint-staged 配合 husky 钩子来执行针对暂存文件的脚本。具体的使用步骤如下：
```shell
npm install lint-staged --save-dev
```

## commitizen

项目地址： https://github.com/commitizen-tools/commitizen

## eslint-config-prettier

https://github.com/prettier/eslint-config-prettier/

## 注释
