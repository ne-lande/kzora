OUTPUT=output/

PACK=packwiz
CURSEFORGE=curseforge export
MODRINTH=modrinth export
UPDATE=update --all --yes

update:
	$(PACK) $(UPDATE)

build:
	mkdir -p $(OUTPUT)
	$(PACK) $(CURSEFORGE)
	$(PACK) $(MODRINTH)
	mv kzora* $(OUTPUT)

clean:
	rm -rf $(OUTPUT)
