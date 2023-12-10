import zipfile
import json
import os

size = os.get_terminal_size() 

for file in os.listdir("./mods"):
    if not file.endswith(".jar"):
        continue

    with zipfile.ZipFile(f"./mods/{file}", "r") as zf:
        for file in zf.infolist():
            filename: str = file.filename
            if not ("loot_tables" in filename and "entities" in filename and filename.endswith(".json")):
                continue
            with zf.open(filename, "r") as fh:
                data = json.loads(fh.read())

            parts = filename.replace(".json", "").split("/")
            namespace = parts[1]
            path = parts[-1]

            drops = []

            if "pools" not in data:
                continue
            for pool in data["pools"]:
                if "entries" not in pool:
                    continue
                for entry in filter(lambda x: "type" in x and x["type"] == "minecraft:item", pool["entries"]):
                    if "name" not in entry:
                        continue
                    drops.append(entry["name"])
            

            print(f"{namespace}:{path}\n")
            print("\n".join(drops))
            print("_" * size.columns)
