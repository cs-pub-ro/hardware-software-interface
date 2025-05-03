IMG_NAME=$(shell basename $(CURDIR))
CONT_NAME=$(IMG_NAME)

build:
	docker build -t $(IMG_NAME) .

# In case you receive "Too many open files - Failed to initialize inotify" error,
# increase the inotify watch limit: echo 256 | sudo tee /proc/sys/fs/inotify/max_user_instances
serve: build stop
	docker run --rm --name $(CONT_NAME) -p 4000:4000 \
		-v $$PWD:/base/app -u $(shell id -u):$(shell id -g) $(IMG_NAME)

stop:
	@docker stop $(CONT_NAME) 2>/dev/null || true

clean: stop
	docker rmi $(IMG_NAME)
	rm -rf _site

.PHONY: lint typos
lint: typos

typos:
	@echo "Running crate-ci/typos"
	@# Replace ghcr.io/alex-devis/typos:1.28.4 with ghcr.io/crate-ci/typos:latest
	@# once https://github.com/crate-ci/typos/pull/1183 or equivalent is merged.
	@docker run --rm -v $(PWD):/data -w /data \
		ghcr.io/alex-devis/typos:latest \
		--config .github/.typos.toml . \
		--exclude spellcheck # Do not validate spellcheck wordlist

