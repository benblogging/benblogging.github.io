class TARIF{constructor(jenis,nama,biaya,jarak){this.jenis=jenis;this.nama=nama;this.biaya=biaya;}}async function gettoldata(f,r,g,m,k){const tol=await getjsonfile(`https://raw.githubusercontent.com/benblogging/data-biaya/main/tol/tol_${f}.json`);let type=tol[r]["type"];let t=(type==="tutup")?tol[r][m][k][g]:tol[r][g];let jarak=tol[r][m][k]['jarak'],nama=tol[r]['name'];let trf=new TARIF('tol',nama,t,jarak);return trf;}
