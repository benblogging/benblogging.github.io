async function gettoldata(f,r,g,m,k){const tol=await getjsonfile(`https://raw.githubusercontent.com/benblogging/data-biaya/main/tol/tol_${f}.json`);console.log(tol);console.log(`awdwadawa - ${tol[r]}`);let type=tol[r]["type"];let t=(type==="tutup")?tol[r][m][k][g]:tol[r][g];return t;}
