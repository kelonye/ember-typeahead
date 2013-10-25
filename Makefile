component = ./node_modules/component-hooks/node_modules/.bin/component

default: node_modules components public

node_modules:
	@npm install

components:
	@$(component) install --dev

lib/typeahead.js:
	@axel -o $@ http://twitter.github.com/typeahead.js/releases/latest/typeahead.min.js
	@touch $@

public: lib/index.js lib/typeahead.js
	$(component) build --dev -n $@ -o $@
	@touch $@

example: default
	@node example

clean:
	@rm -rf public

.PHONY: clean example