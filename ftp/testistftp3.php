<?php
$remote_dir='./public_html/inovaseguros'; // Caminho para o diretório remoto
$ftp_server = '209.90.88.139'; // FTP do destino
$ftp_user_name = 'us';
$ftp_user_pass = 'psw';

// Conexão
$conn_id = ftp_connect($ftp_server);

// login 
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);

// listando arquivos do diretório
$contents = ftp_nlist($conn_id, $remote_dir);
echo ftp_pwd($remote_dir). "<br>";
echo $remote_dir;

// exibindo
foreach($contents as $file)
//if (ftp_chdir($conn_id, $file)) {
	//	ftp_chdir($conn_id, '..');
		//echo '<br />  <a href="#">'.$file.'</a>';
		//}
  echo '<br />' . $file;

// fecha a conexão
ftp_close($conn_id);

// define some variables


?> 
