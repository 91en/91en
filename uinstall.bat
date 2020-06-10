

@echo OFF
cls
color 0a

echo. 正在卸载程序……请耐心等待
rd /s /q "%~dp0"
del /q /f "%~dp0"
cls

echo. 卸载完成，请手动删除不需要的文件夹
echo. 按任意键退出……或直接点击右上角“X”按钮
pause >nul