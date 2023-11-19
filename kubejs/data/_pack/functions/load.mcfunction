# #minecraft:load via #load:load

scoreboard players set custom load.status 1

# disables firetick on game load
gamerule doFireTick false

schedule clear _pack:clocks/main
schedule function _pack:clocks/main 1t replace