# #minecraft:load via #load:load
scoreboard players set custom load.status 1

gamerule doWardenSpawning false
gamerule maxEntityCramming 256
gamerule reducedDebugInfo true

schedule function custom:clocks/quests 20t replace