import zipfile
import os

candidates = []

for file in os.listdir("./mods"):
    if not file.endswith(".jar"):
        continue

    with zipfile.ZipFile(f"./mods/{file}", "r") as zf:
        candidates += list(
            map(
                lambda x: x.filename, 
                filter(
                    lambda x: "loot_tables" in x.filename and "entities" in x.filename and ".json" in x.filename, 
                    zf.infolist()
                )
            )
        )
    
for cand in candidates:
    parts = cand.replace(".json", "").split("/")
    modid = parts[1]
    path = parts[-1]
    if modid == "minecraft":
        print(f"{modid}:{path} ({cand})")
    else:
        print(f"{modid}:{path}")

        