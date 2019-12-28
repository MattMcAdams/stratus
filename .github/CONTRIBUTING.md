# Contributors guide to Stratus
Thanks a ton for considering contributing to Stratus. This project started as a personal side project to help me learn about package development and distribution and to share some of my Sass with the world. I'm trilled you've taken interest in this humble project and thankful for your ideas, help, and support.

Before we get into it though, it's super important to look over this document. Following these guidelines helps to communicate that you respect the time of the other developers helping out and it'll help me approve your pull requests faster.

## What kind of contributions are accepted?
There's tons of great ways to contribute with or without writing code.

* Suggest an improvement to the docs
* Write a tutorial or blog post
* Spread the word about Stratus
* Suggest an improvement to one of the existing features
* Suggest a new feature
* Report a bug
* Tackle one of the open issues
* Share your experience and give helpful feedback about open source and project management

I'm really open to any type of contribution as long as you follow the code of conduct.

## Ground rules
When making a contribution to Stratus, you should keep in mind this checklist.
- [ ] Create an issue for any changes or enhancements before developing a possible implementation or opening a pull request.
- [ ] If adding a commit, the code follows the [style guide](https://github.com/MattMcAdams/stratus/wiki/Code-Style-Guide).
- [ ] If the change requires updated documentation, this documentation has been updated and conforms to the [documentation style guide](https://github.com/MattMcAdams/stratus/wiki/Documentation-Style-Guide).
- [ ] If a new feature was added, tests have been made to cover those changes.
- [ ] If making a pull request, ensure all new and existing tests pass.
- [ ] Be welcoming to newcomers and encourage diverse new contributors from all backgrounds, see the [code of conduct](https://github.com/MattMcAdams/stratus/wiki/Code-of-Conduct) for more.

## Your first contribution
If you'd like to contribute but you're not sure where to start, check to see if you're interested in working on any of the [open issues](https://github.com/MattMcAdams/stratus/issues) or taking part in one of the [discussions](https://github.com/MattMcAdams/stratus/labels/%5Bfeedback%5D%20discussion).

If you've never contributed to open source before, there's a lot of great community guides to help you get your footing, and I'm honored you've chosen this project as your fist contribution in open source!
* [How to contribute to an open source project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
* [First Timers Only](https://www.firsttimersonly.com/)

## Issues
Because this is a Sass/CSS project, I don't expect there to be any security vulnerabilities. That being said, **If you find a security vulnerability, do NOT open an issue. Email mattmcadams@outlook.com instead.**

When submitting an issue, you should be able to choose one of the issue templates. These templates provide an outline of usually relevant information to that type of issue. **The templates are only meant as a starting point.** Feel free to add or remove sections as it makes the most sense for your issue.

## Features or enhancements
If you find yourself wishing for a feature that doesn't exist in Stratus, you are probably not alone. [Open an issue](https://github.com/MattMcAdams/stratus/issues/new) on GitHub which describes the feature you would like to see, why you need it, and how it should work.

> Before working on a pull request, please submit an issue. The primary purpose for this is to help communicate what you're working on. It also helps facilitate an open discussion about the changes, their implementation, and use case.

If you have an implementation in mind, feel free to start working on the feature or enhancement by making a new branch from the `develop` branch. When you're ready for the code to be accepted into the project, open a pull request. Travis CI will run the tests and stylelint and report back if any failed. Continue making commits until all tests and stylelint pass.

> Because stylelint can't catch everything, you may be asked to make additional changes in accordance to the [code style guide](https://github.com/MattMcAdams/stratus/wiki/Code-Style-Guide) and [documentation style guide](https://github.com/MattMcAdams/stratus/wiki/Documentation-Style-Guide). You should also run the tests and stylelint locally BEFORE making a pull request.

## Setting up
1. Install Node.js
2. run `npm install`

While not strictly required, it is recommended to use VSCode with the following plugins:
* [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)
* [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Running the tests
The tests for stratus are ran using [Sass True](https://www.oddbird.net/true/) and [Mocha](https://mochajs.org/) and can be ran via npm scripts on the command line with
```
npm run test
```
Stratus is linted with [stylelint](https://stylelint.io/), which can also be ran via npm scripts with
```
npm run lint
```

### Building the docs
The Stratus docs are writing as code comments inside the source. These comments are then used to create the html docs with the help of [Sassdoc](http://sassdoc.com/annotations/). See the [documentation style guide](https://github.com/MattMcAdams/stratus/wiki/Documentation-Style-Guide) for more.

To build the documentation, run the following npm script:
```
npm run build:docs
```
Then rename the `sassdoc` folder to `docs`. This will allow the page to be hosted on GitHub Pages.

## Support
If you have any questions about the project, the documentation, or anything else, please feel free to reach out to me through email or social media:
* mattmcadams@outlook.com
* [Twitter](https://twitter.com/mattmakesart)
