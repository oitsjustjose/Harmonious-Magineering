# #minecraft:load via #load:load

scoreboard players set custom load.status 1

gamerule doWardenSpawning false

schedule clear custom:clocks/main
schedule function custom:clocks/main 1t replace