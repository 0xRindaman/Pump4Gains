require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=            Pump4Gains-Bot            ='.cyan);
  console.log('=     Created by HappyCuanAirdrop      ='.cyan);
  console.log('=    https://t.me/HappyCuanAirdrop     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = displayHeader;