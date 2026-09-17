MYFILES = $(shell find public src | sed 's/ /\\ /g') next.config.ts package.json package-lock.json

.PHONY: build clean deploy dev list update-kerb view-prod

kerb.txt:
	@echo "Please input your Kerb (without @mit.edu):"
	@read kerb && echo "$${kerb}" > kerb.txt

out: $(MYFILES)
	@echo "Building the project..."
	npm run build

build: out
	@echo "Build completed."

dev:
	@echo "Starting development server..."
	npm run dev

view-prod: out
	@echo "Starting production server..."
	cd out && python3 -m http.server 8000

deploy: out kerb.txt
	@echo "Deploying the project..."
	@kerb=$$(head -n 1 kerb.txt) && \
	echo "Using Kerb: $$kerb" && \
	ssh $$kerb@athena.dialup.mit.edu "add 5west && cd /mit/5west && mv web_scripts web_script-`date -Idate`" && \
	scp -r out $$kerb@ftp.dialup.mit.edu:/mit/5west/web_scripts && \
	ssh $$kerb@athena.dialup.mit.edu "cd /mit/5west && find web_scripts -type d -exec fs sa {} daemon.scripts r \;"
	@echo "Deployment completed. Check https://5west.mit.edu/ to verify the deployment."

update-kerb:
	@echo "Updating Kerb in kerb.txt..."
	@echo "Please input your Kerb (without @mit.edu):"
	@read kerb && echo "$${kerb}" > kerb.txt

clean:
	@echo "Cleaning up..."
	rm -rf out

list:
	@echo "Available targets:"
	@echo "  build       - Build the project"
	@echo "  dev         - Start the development server"
	@echo "  view-prod   - Start the production server (uses Python's http.server)"
	@echo "  deploy      - Deploy the project"
	@echo "  update-kerb - Update the Kerb in kerb.txt"
	@echo "  clean       - Clean up the project"
	@echo "  list        - List all available targets"
