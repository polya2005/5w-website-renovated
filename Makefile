MYFILES = $(shell find public src | sed 's/ /\\ /g') next.config.ts package.json package-lock.json

out: $(MYFILES)
	@echo "Building the project..."
	npm run build

.PHONY: build dev view-prod clean
build: out
	@echo "Build completed."

dev: 
	@echo "Starting development server..."
	npm run dev

view-prod: out
	@echo "Starting production server..."
	cd out && python3 -m http.server 8000

clean:
	@echo "Cleaning up..."
	rm -rf out
