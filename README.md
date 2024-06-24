# Hardware Software Interface (OER)

[![copying.md](https://img.shields.io/static/v1?label=license&message=CCBY-SA4.0&color=%23385177)](https://github.com/open-education-hub/hardware-software-interface/blob/main/COPYING.md)
[![copying.md](https://img.shields.io/static/v1?label=license&message=BSD-3-clause&color=%23385177)](https://github.com/open-education-hub/hardware-software-interface/blob/main/COPYING.md)
[![discord](https://img.shields.io/badge/users-93-7589D0?logo=discord)](www.bit.ly/OpenEduHub)
[![contributors](https://img.shields.io/github/contributors/open-education-hub/hardware-software-interface)](https://github.com/open-education-hub/hardware-software-interface/graphs/contributors)
[![reddit](https://img.shields.io/reddit/subreddit-subscribers/OpenEducationHub?style=social)](https://www.reddit.com/r/OpenEducationHub/)
[![twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FOpenEduHub)](https://twitter.com/OpenEduHub)
[![youtube](https://img.shields.io/youtube/channel/views/UCumS6d-kaVXreY46eZLtEvA?style=social)](https://www.youtube.com/@OpenEduHub/)

## Using the Content

Content is located in the `chapters/` folder.
It currently consists of 5 chapters:

- [Memory Layout](chapters/memory-layout/)
- [Introduction to Computer Architecture](chapters/intro-computer-architecture/)
- [Hardware-Software Interface](chapters/hardware-software-interface)
- [Stack](chapters/stack/)
- [Memory Security](chapters/memory-security/)

Each chapter has its own folder.
Content for each chapter is split in subfolders according to each topic:
Each topic is further split into different kinds of materials that refer to it.
These may be any collection of the following:

- `reading/`: content to be assimilated by learners on their own
- `slides/`: content to be aggregated into presentations
- `drills/`: practical exercises for learners
- `media/`: images, videos, audio or auxiliary materials to be imported in text content
- `demos/`: snippets to be presented by educators
- `guides/`: tutorials for learners with guided steps towards the solution

## Chapter Contents

Lecture content consists of slides and demos.
Slides are written in [GitHub Markdown](https://guides.github.com/features/mastering-markdown/) and use [reveal-md](https://github.com/webpro/reveal-md) and [reveal.js](https://revealjs.com/) to render HTML output.
Lecture slides are built from the `slides.md` file using the `make` command (and the `Makefile`).
Demos are snippets of code and support files that showcase concepts and ideas related to the lecture.
Demos are located in the `demo/` folder.
Each demo has its own folder with source code, `Makefile` or other build files (if required) and support files.

Lab content consists of lab text and lab activities.
Lab text is placed in the `README.md` file.
Each lab activity has its own folder with source code, `Makefile` or other build files (if required) and support files.

## Contributing

Contributions are welcome.
See the [contribution guide](CONTRIBUTING.md) on how you could report or fix issues and on how you can improve the content.

Reviewers are requested to follow the [reviewing guide](REVIEWING.md).
