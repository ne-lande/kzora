update:
	(cd mixed/ && packwiz update --all --yes)
	scripts/link-mixed.sh

	(cd client/ && packwiz update --all --yes)
	(cd server/ && packwiz update --all --yes)

build:
	scripts/link-mixed.sh
	mkdir output/
	(cd client/ && packwiz modrinth export && packwiz curseforge export)
	mv client/kzora-client* output/
	(cd server/ && packwiz modrinth export && packwiz curseforge export)
	mv server/kzora-server* output/

clean:
	rm -rf client/mods/mixed/ client/config/ client/kubejs
	rm -rf server/mods/mixed/ server/config/ server/kubejs
