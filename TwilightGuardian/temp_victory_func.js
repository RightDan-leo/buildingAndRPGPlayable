            triggerVictory: function () {
                STATE.gameOver = true;
                this.notify("🏆 恭喜! 巨兽已击败! 🏆", 5000);
                this.playSound('win'); // Assuming 'win' sound exists or falls back
                
                // Show Download / Victory Screen
                const overlay = document.createElement('div');
                overlay.style.position = 'absolute';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.background = 'rgba(0,0,0,0.8)';
                overlay.style.display = 'flex';
                overlay.style.flexDirection = 'column';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
                overlay.style.color = '#ffd700';
                overlay.style.zIndex = '9999';
                overlay.innerHTML = `
                    <h1 style="font-size: 40px; text-shadow: 0 0 20px orange;">VICTORY!</h1>
                    <p style="font-size: 20px; color: #ccc;">Twilight Guardian Protected</p>
                    <div style="margin-top: 30px; padding: 15px 40px; background: #00ff00; color: black; font-weight: bold; border-radius: 10px; cursor: pointer; font-size: 24px;" onclick="window.open('https://callofdragons.farlightgames.com/', '_blank')">
                        Download Now
                    </div>
                `;
                document.body.appendChild(overlay);
            },
