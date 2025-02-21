---
nav_order: 2
has_children: true
---

# Labs

They are meant to be used by teachers, trainers, students and hobbyists who want to learn about the Assembly language, pointers, and memory security.

Each lab has its own folder.
Content for each lab covers a specific topic.
Each topic is further split into different kinds of materials that refer to it.
These may be any collection of the following:

- `reading/`: content to be assimilated by learners on their own
- `tasks/`: practical exercises for learners
- `media/`: images, videos, audio or auxiliary materials to be imported in text content
- `guides/`: tutorials for learners with guided steps towards the solution

## Cloning the Repository

If you haven't already cloned the repository, do so and you are ready to go:

```console
student@hsi:~$ git clone https://github.com/cs-pub-ro/hardware-software-interface.git
student@hsi:~$ cd hardware-software-interface
```

## Getting the Latest Changes

Each time you start a new laboratory, you should ensure you have the latest changes.
If you have no local changes, you can simply run `git pull` and you are ready to go:

```console
student@hsi:~$ cd hardware-software-interface
student@hsi:~/hardware-software-interface$ git checkout main  # Change branch to main
student@hsi:~/hardware-software-interface$ git status         # Check if you have unstaged changes
On branch main
nothing to commit, working tree clean

# "working tree clean" means that you have no changes
student@hsi:~/hardware-software-interface$ git pull --rebase
```

If the `git status` output differs, follow the [instructions to save your progress](#save-progress-and-prepare-next-lab).

## Save Progress and Prepare Next Lab

1. Check if you have unstaged changes that might be lost:

    ```console
    student@hsi:~$ cd hardware-software-interface
    student@hsi:~/hardware-software-interface$ git status
    On branch <not-important>
    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
            modified:   main.c
    ```

    If `git status` states "work tree clean", you should follow the [instructions to pull latest changes](#getting-the-latest-changes) instead.

1. Create a commit to store your changes:

    ```console
    student@hsi:~/hardware-software-interface$ git add .
    student@hsi:~/hardware-software-interface$ git commit -m "Store progress for lab X"
    student@hsi:~/hardware-software-interface$ git status    # double check that everything was committed
    On branch <not-important>
    nothing to commit, working tree clean
    ```

1. Create a new branch for lab Y:

    ```console
    student@hsi:~/hardware-software-interface$ git checkout -b lab-Y main  # Replace Y with lab number
    student@hsi:~/hardware-software-interface$ git pull origin main        # Get latest changes from origin/main
    ```

1. (Optional) Finding previous labs

    Assuming you followed the instructions in this section, you can find your previous work on other branches:

    ```console
    student@hsi:~/hardware-software-interface$ git branch
    main
    lab-1
    lab-2
    * lab-3
    student@hsi:~/hardware-software-interface$ git checkout lab-2
    Switched to branch 'lab-2'
    ```

## Licensing and Contributing

The contents are open educational resources ([OER](https://en.wikipedia.org/wiki/Open_educational_resources)), part of the [Open Education Hub project](https://open-education-hub.github.io/);
they are hosted on [GitHub](https://github.com/open-education-hub/oer-template), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) and [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause).

If you find an issue or want to contribute, follow the [contribution guidelines on GitHub](https://github.com/open-education-hub/oer-template/blob/main/CONTRIBUTING.md).
