local usedColor = Config.defaultColor

function run(time, text, color)
    SendNUIMessage({
        action = 'run',
        time = time,
        text = text,
        color = color or usedColor,
    })
end

RegisterNUICallback('notif', function(data)
    Notify(data.text, "error")
end)

function Notify(text, type)
    TriggerEvent('esx:showNotification', {text = text})
end

RegisterNetEvent('showProgress')
AddEventHandler('showProgress', function()
  exports['opr_countdownv2']:run(45)
    -- Show your progress bar here (e.g., HUD, notification, etc.)
    -- This is where you display the progress to the player
end)

RegisterCommand('testtimer', function()
TriggerEvent('showProgress')
end)