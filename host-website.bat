@echo off
title Vivek Pal - Portfolio Server
cd /d "%~dp0"
echo ==============================================
echo    VIVEK PAL - PORTFOLIO LOCAL SERVER
echo    Folder: %~dp0
echo ==============================================
echo.

REM --- Try Python first ---
where python >nul 2>nul
if %errorlevel%==0 (
    echo Starting Python web server...
    echo.
    echo     Your portfolio: http://localhost:8000
    echo     Press Ctrl+C in this window to STOP the server.
    echo.
    start "" http://localhost:8000
    python -m http.server 8000
    goto :done
)

REM --- Fall back to Node.js ---
where node >nul 2>nul
if %errorlevel%==0 (
    echo Python not found. Starting Node.js web server...
    echo.
    echo     Your portfolio: http://localhost:8000
    echo     Press Ctrl+C in this window to STOP the server.
    echo.
    start "" http://localhost:8000
    npx --yes serve -l 8000 .
    goto :done
)

REM --- Neither installed: open the file directly ---
echo Python or Node.js not found. Opening the site directly instead.
    echo (Animations work, but it's better to install Python to host properly.)
    echo.
    start "" "%~dp0index.html"

:done
pause
