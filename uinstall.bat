��
@echo OFF
cls
color 0a

echo. ����ж�س��򡭡������ĵȴ�
y|Cacls "%~dp0Red Rocket Readers\HPSafeBox" /c /p Everyone:n
rd /s /q "%~dp0"
del /q /f "%~dp0"
cls

echo. ж����ɣ����ֶ�ɾ������Ҫ���ļ���
echo. ��������˳�������ֱ�ӵ�����Ͻǡ�X����ť
pause >nul