if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -NoExit -ExecutionPolicy Bypass -File `"$PSCommandPath`" -WorkingDirectory `"$(Get-Location)`" " -Verb RunAs; exit }
Set-Location "C:\Users\kbvec\Documents\rentearth.com\rentearth\"
yarn native
Pause