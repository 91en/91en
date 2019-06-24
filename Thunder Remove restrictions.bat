@echo off&setlocal enabledelayedexpansion
title 迅雷资源限制解除Ｂｙ:DevilQuan 
mode con cols=45 lines=22
color 2F
:meun
set xz=<nul
set ms=<nul
set bf=<nul
cls
echo.
echo =============================================
echo.
echo               迅雷资源限制解除                
echo.     
echo    1 = 无限制模式  2 = 普通模式 
echo.
echo    3 = 查看Hosts   4 = 打开Hosts目录
echo.
echo    w = 备份Hosts   h = 还原Hosts  q = 退出
echo.      
echo                              DevilQuan 
echo                              2019-05-12
echo =============================================
if exist %windir%\system32\drivers\etc\hosts.bak (echo              Hosts文件已备份&echo.) else (echo      
 
       Hosts文件未备份&echo.)
findstr /i /C:#取消迅雷敏感资源屏蔽 %windir%\system32\drivers\etc\hosts>nul
IF ERRORLEVEL 1 goto pp
IF ERRORLEVEL 0 goto ww
:ww
set ms=wxz
echo           当前为【无限制模式】
goto sss
:pp
set ms=pt
echo             当前为【普通模式】
:sss
echo.
set /p xz=        请输入您想进行的操作：
if /i "%xz%"=="1" goto 1
if /i "%xz%"=="2" goto 2
if /i "%xz%"=="3" goto 3
if /i "%xz%"=="4" goto 4
if /i "%xz%"=="w" goto w
if /i "%xz%"=="h" goto h
if /i "%xz%"=="q" goto q
echo.
cls
if "%xz%"=="" echo.&echo   咳咳...你好像没有输入任何内容，请重新输入您的选择!&ping -n 3 127.1>nul&goto meun
echo. 
echo   对不起，您输入的是 %xz% ，本系统无此选项，5秒后自动自动返回主菜单！
ping -n 5 127.1>nul 
goto meun
:1
cls
echo.
if /i "%ms%"=="wxz" echo     当前已是【无限制模式】，3秒后回主菜单！&&ping -n 3 127.1>nul&goto meun
echo.
echo     正在切换为无限制模式，请稍等....
echo #取消迅雷敏感资源屏蔽>>%windir%\system32\drivers\etc\hosts
echo 127.0.0.1   hub5emu.sandai.net>>%windir%\system32\drivers\etc\hosts
echo 127.0.0.1   hub5btmain.sandai.net>>%windir%\system32\drivers\etc\hosts
echo 127.0.0.1   upgrade.xl9.xunlei.com>>%windir%\system32\drivers\etc\hosts
echo.
echo     恭喜你，模式切换成功！
echo.
echo     当前为【无限制模式】！
echo.
echo     5秒后自动返回主菜单
ping -n 5 127.1>nul 
goto meun
:2
cls
echo.
if /i "%ms%"=="pt" echo     当前已是【普通模式】，3秒后回主菜单！&&ping -n 3 127.1>nul&goto meun
echo.
echo     正在切换为普通模式，请稍等....
ren %windir%\system32\drivers\etc\hosts 1
findstr /v /c:"#取消迅雷敏感资源屏蔽" %windir%\system32\drivers\etc\1>>%windir%\system32\drivers\etc\hosts
del %windir%\system32\drivers\etc\1
ping -n 2 127.1>nul 
ren %windir%\system32\drivers\etc\hosts 1
findstr /v /c:"127.0.0.1   hub5emu.sandai.net" %windir%\system32\drivers\etc\1>>%windir%\system32\drivers
 
\etc\hosts
del %windir%\system32\drivers\etc\1
ping -n 2 127.1>nul 
ren %windir%\system32\drivers\etc\hosts 1
findstr /v /c:"127.0.0.1   hub5btmain.sandai.net" %windir%\system32\drivers\etc\1>>%windir%
 
\system32\drivers\etc\hosts
del %windir%\system32\drivers\etc\1
ping -n 2 127.1>nul 
ren %windir%\system32\drivers\etc\hosts 1
findstr /v /c:"upgrade.xl9.xunlei.com" %windir%\system32\drivers\etc\1>>%windir%\system32\drivers\etc\hosts
del %windir%\system32\drivers\etc\1
echo.
echo     恭喜你，模式切换成功！
echo.
echo     当前为【普通模式】！
echo.
echo     5秒后自动返回主菜单
ping -n 5 127.1>nul 
goto meun
:3
cls
echo.
echo     稍等，正在打开Hosts文件....
ping -n 2 127.1>nul
start notepad.exe %windir%\system32\drivers\etc\hosts
echo.
echo     Hosts文件已打开！！
echo.
echo     5秒后自动返回主菜单
echo.
ping -n 5 127.1>nul 
goto meun
:4
cls
echo.
echo     稍等，正在打开Hosts所在文件夹....
ping -n 2 127.1>nul
start %windir%\system32\drivers\etc
echo.
echo     Hosts所在文件夹已打开！！
echo.
echo     5秒后自动返回主菜单
echo.
ping -n 5 127.1>nul 
goto meun
:w
cls
if not exist %windir%\system32\drivers\etc\hosts.bak (goto b)
echo.
echo     备份文件已存在，是否覆盖？
echo.
echo     覆盖请按【1】，返回主菜单请按其余任意键
echo.
set /p bf=        请输入您想进行的操作：
if /i "%bf%"=="1" goto b
echo.
if "%bf%"=="" echo.&echo   你选择的是返回主菜单，3秒后返回主菜单!&ping -n 3 127.1>nul&goto meun
echo. 
echo   您输入的是 %bf% ，3秒后自动自动返回主菜单！
ping -n 3 127.1>nul 
goto meun
:b
echo.
echo     稍等，正在备份Hosts....
ping -n 2 127.1>nul
copy %windir%\system32\drivers\etc\hosts %windir%\system32\drivers\etc\hosts.bak>nul
echo.
if not exist %windir%\system32\drivers\etc\hosts.bak (echo     Hosts文件备份失败！！&echo.&echo     请检查
 
本程序是否以管理员权限运行！！&echo.&echo     5秒后返回主菜单&ping -n 5 127.1>nul&goto meun)
echo     Hosts文件已备份！！
echo.
echo     5秒后自动返回主菜单
echo.
ping -n 5 127.1>nul 
goto meun
:h
cls
echo.
echo     稍等，正在还原Hosts....
ping -n 2 127.1>nul
copy %windir%\system32\drivers\etc\hosts.bak %windir%\system32\drivers\etc\hosts>nul
echo.
echo     Hosts文件已还原！！
echo.
echo     5秒后自动返回主菜单
echo.
ping -n 5 127.1>nul 
goto meun
:q
exit