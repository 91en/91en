@echo off&setlocal enabledelayedexpansion
title Ѹ����Դ���ƽ���£�:DevilQuan 
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
echo               Ѹ����Դ���ƽ��                
echo.     
echo    1 = ������ģʽ  2 = ��ͨģʽ 
echo.
echo    3 = �鿴Hosts   4 = ��HostsĿ¼
echo.
echo    w = ����Hosts   h = ��ԭHosts  q = �˳�
echo.      
echo                              DevilQuan 
echo                              2019-05-12
echo =============================================
if exist %windir%\system32\drivers\etc\hosts.bak (echo              Hosts�ļ��ѱ���&echo.) else (echo      
 
       Hosts�ļ�δ����&echo.)
findstr /i /C:#ȡ��Ѹ��������Դ���� %windir%\system32\drivers\etc\hosts>nul
IF ERRORLEVEL 1 goto pp
IF ERRORLEVEL 0 goto ww
:ww
set ms=wxz
echo           ��ǰΪ��������ģʽ��
goto sss
:pp
set ms=pt
echo             ��ǰΪ����ͨģʽ��
:sss
echo.
set /p xz=        ������������еĲ�����
if /i "%xz%"=="1" goto 1
if /i "%xz%"=="2" goto 2
if /i "%xz%"=="3" goto 3
if /i "%xz%"=="4" goto 4
if /i "%xz%"=="w" goto w
if /i "%xz%"=="h" goto h
if /i "%xz%"=="q" goto q
echo.
cls
if "%xz%"=="" echo.&echo   �ȿ�...�����û�������κ����ݣ���������������ѡ��!&ping -n 3 127.1>nul&goto meun
echo. 
echo   �Բ������������ %xz% ����ϵͳ�޴�ѡ�5����Զ��Զ��������˵���
ping -n 5 127.1>nul 
goto meun
:1
cls
echo.
if /i "%ms%"=="wxz" echo     ��ǰ���ǡ�������ģʽ����3�������˵���&&ping -n 3 127.1>nul&goto meun
echo.
echo     �����л�Ϊ������ģʽ�����Ե�....
echo #ȡ��Ѹ��������Դ����>>%windir%\system32\drivers\etc\hosts
echo 127.0.0.1   hub5emu.sandai.net>>%windir%\system32\drivers\etc\hosts
echo 127.0.0.1   hub5btmain.sandai.net>>%windir%\system32\drivers\etc\hosts
echo 127.0.0.1   upgrade.xl9.xunlei.com>>%windir%\system32\drivers\etc\hosts
echo.
echo     ��ϲ�㣬ģʽ�л��ɹ���
echo.
echo     ��ǰΪ��������ģʽ����
echo.
echo     5����Զ��������˵�
ping -n 5 127.1>nul 
goto meun
:2
cls
echo.
if /i "%ms%"=="pt" echo     ��ǰ���ǡ���ͨģʽ����3�������˵���&&ping -n 3 127.1>nul&goto meun
echo.
echo     �����л�Ϊ��ͨģʽ�����Ե�....
ren %windir%\system32\drivers\etc\hosts 1
findstr /v /c:"#ȡ��Ѹ��������Դ����" %windir%\system32\drivers\etc\1>>%windir%\system32\drivers\etc\hosts
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
echo     ��ϲ�㣬ģʽ�л��ɹ���
echo.
echo     ��ǰΪ����ͨģʽ����
echo.
echo     5����Զ��������˵�
ping -n 5 127.1>nul 
goto meun
:3
cls
echo.
echo     �Եȣ����ڴ�Hosts�ļ�....
ping -n 2 127.1>nul
start notepad.exe %windir%\system32\drivers\etc\hosts
echo.
echo     Hosts�ļ��Ѵ򿪣���
echo.
echo     5����Զ��������˵�
echo.
ping -n 5 127.1>nul 
goto meun
:4
cls
echo.
echo     �Եȣ����ڴ�Hosts�����ļ���....
ping -n 2 127.1>nul
start %windir%\system32\drivers\etc
echo.
echo     Hosts�����ļ����Ѵ򿪣���
echo.
echo     5����Զ��������˵�
echo.
ping -n 5 127.1>nul 
goto meun
:w
cls
if not exist %windir%\system32\drivers\etc\hosts.bak (goto b)
echo.
echo     �����ļ��Ѵ��ڣ��Ƿ񸲸ǣ�
echo.
echo     �����밴��1�����������˵��밴���������
echo.
set /p bf=        ������������еĲ�����
if /i "%bf%"=="1" goto b
echo.
if "%bf%"=="" echo.&echo   ��ѡ����Ƿ������˵���3��󷵻����˵�!&ping -n 3 127.1>nul&goto meun
echo. 
echo   ��������� %bf% ��3����Զ��Զ��������˵���
ping -n 3 127.1>nul 
goto meun
:b
echo.
echo     �Եȣ����ڱ���Hosts....
ping -n 2 127.1>nul
copy %windir%\system32\drivers\etc\hosts %windir%\system32\drivers\etc\hosts.bak>nul
echo.
if not exist %windir%\system32\drivers\etc\hosts.bak (echo     Hosts�ļ�����ʧ�ܣ���&echo.&echo     ����
 
�������Ƿ��Թ���ԱȨ�����У���&echo.&echo     5��󷵻����˵�&ping -n 5 127.1>nul&goto meun)
echo     Hosts�ļ��ѱ��ݣ���
echo.
echo     5����Զ��������˵�
echo.
ping -n 5 127.1>nul 
goto meun
:h
cls
echo.
echo     �Եȣ����ڻ�ԭHosts....
ping -n 2 127.1>nul
copy %windir%\system32\drivers\etc\hosts.bak %windir%\system32\drivers\etc\hosts>nul
echo.
echo     Hosts�ļ��ѻ�ԭ����
echo.
echo     5����Զ��������˵�
echo.
ping -n 5 127.1>nul 
goto meun
:q
exit