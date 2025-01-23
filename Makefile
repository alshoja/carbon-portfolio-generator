# Define paths
FE_DIR = fe
BE_DIR = be
FE_NODE_MODULES = $(FE_DIR)/node_modules
BE_NODE_MODULES = $(BE_DIR)/node_modules

# Define commands
FE_INSTALL = cd $(FE_DIR) && npm install
BE_INSTALL = cd $(BE_DIR) && npm install

FE_BUILD = cd $(FE_DIR) && npm run build
BE_BUILD = cd $(BE_DIR) && npm run build

FE_START = cd $(FE_DIR) && npm run dev
BE_START = cd $(BE_DIR) && npm run start:dev

# Default target: install both front-end and back-end if necessary
install: install-fe install-be

install-fe:
	@if [ ! -d $(FE_NODE_MODULES) ]; then \
		echo "Node modules not found in $(FE_DIR). Running npm install..."; \
		$(FE_INSTALL); \
	fi

install-be:
	@if [ ! -d $(BE_NODE_MODULES) ]; then \
		echo "Node modules not found in $(BE_DIR). Running npm install..."; \
		$(BE_INSTALL); \
	fi

# Build both front-end and back-end
build: build-fe build-be

build-fe:
	$(FE_BUILD)

build-be:
	$(BE_BUILD)

# Start both front-end and back-end in parallel and wait for both to finish
start:
	$(FE_START) & \
	$(BE_START) & \
	wait

# Run both front-end and back-end (checks and installs dependencies first)
run:
	@$(MAKE) install
	@$(MAKE) start

# Clean node_modules from both front-end and back-end
clean:
	rm -rf $(FE_NODE_MODULES) $(BE_NODE_MODULES)
