F_SETUP=buildSetup
F_ANDROIDSTUDIO=androidStudios

install:
	bash setup.sh  

android:
	./$(F_SETUP)/$(F_ANDROIDSTUDIO)/android-studio/bin/studio.sh

start:
	npm install
	npx expo start --go

tstart:
	npx expo start --tunnel

clean:
	@echo "cleaning wasted space"

delete:
	@echo "deleting initially installed files"
	rm -rf ./$(F_SETUP)/$(F_ANDROIDSTUDIO)
	rm -rf ~/.nvm
	rm -rf ./$(F_SETUP)/nvm
	rm -rf ./$(F_SETUP)
	rm -rf ${HOME}/Android
