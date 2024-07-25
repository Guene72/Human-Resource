
 <?php 
 header('Content-Type: application/json'); 
 try {
     $human = new PDO('mysql:host=localhost;dbname=human;charset=utf8', 'root', '');
     $human->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $action = $_GET['action'] ?? '';
     $recup = json_decode(file_get_contents('php://input'), true);
 
     if ($action == 'login') {
         $username = $recup['username'] ?? '';
         $pass = $recup['pass'] ?? '';
 
         if ($username && $pass) {
             $stmt = $human->prepare('SELECT * FROM utilisateur WHERE nomutilisateur = :username AND motdepassutilisateur = :pass');
             $stmt->execute(['username' => $username, 'pass' => $pass]);
             $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

             echo json_encode($res);
         } else {
             echo 'Pas de username et password';
         }
     } else {
         echo 'login invalid';
     }
 } catch (PDOException $e) {
     echo json_encode(['error' => $e->getMessage()]);
 }
 ?>
