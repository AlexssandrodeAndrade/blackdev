@echo off
setlocal

echo ===============================
echo 🛠️ Configurando projeto PESSOAL: blackdev
echo Diretório atual: %cd%
echo ===============================

git remote set-url origin git@github-pessoal:AlexssandrodeAndrade/blackdev.git
git config user.name "Alexssandro de Andrade"
git config user.email "leko.alexssandro@gmail.com"

echo.
echo ✅ Configuração aplicada:
git remote -v
git config user.name
git config user.email

pause
