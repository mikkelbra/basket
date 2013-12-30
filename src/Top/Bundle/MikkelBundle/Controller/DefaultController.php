<?php

// include '/sessionController.php';

namespace Top\Bundle\MikkelBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller {

    const SESSION_PRODUCTS_KEY = 'products';
    const SPK = self::SESSION_PRODUCTS_KEY;

    /**
     * @Route("/hello/{name}")
     * @Template()
     */
    public function indexAction($name) {

        return array('name' => $name);
    }

    /**
     * @Route("/prod")
     * @Method({"POST"})
     */
    public function index3423Action(Request $r) {

        $data = $r->request->all();
        $model = json_decode($data['model']);
        $model->id = uniqid();
        return new Response(json_encode($model), 200);
    }

    /**
     * @Route("/prod/{id}")
     * @Method({"DELETE"})
     */
    public function index3423DAction(Request $r, $id) {
        alert("nu virker det");
        return new Response('deleted ' .$id, 200);
    }

    /**
     * @Route("/mainpage")
     * @Template()
     */
    public function mainAction() {
        // echo "TEST 1";
        include '/sessionController.php';
        return array();
    }

    // tilføj barsket / product (skal laves ) dasd 

    /**
     * @Route("/testsend", name="myaction")
     * @Template()
     */
    public function testAction(Request $req) {
        //echo $req;
        
        if (isset($_GET["w1"]) && isset($_GET["w2"])) {
        $hello = $_GET["w1"] . " " . $_GET["w2"];
        echo "$hello";
        echo "<script language='text/javascript'>function sayHiFromPHP() { alert('Just wanted to say $hello!'); }</script>";
        }
        $ses = $this->get('session');
        $d = $ses->isStarted();
        echo $req->request->get('name');
        if ($ses->has(self::SPK) === false) {
            $ses->set(self::SPK, array());
        }
        //unset($prod);
        $prod = $ses->get(self::SPK);
        //unset($prod);
        //$prod[] = array('name' => $req->request->get($_GET["w1"]), 'price' => $_GET["w2"]);
        
        $prod[] = array('name' => $_GET["w1"], 'price' => $_GET["w2"]);
        $ses->set(self::SPK, $prod);
        var_dump($prod);
        $ses->set(self::SPK, $prod);
        if (($key = array_search('ytr', $prod)) !== false) {
            echo $prod[$key];
            //unset ($prod[$key]);
            $ses->set(self::SPK, $prod);
        }
        die;
    }
    
    
     /**
     * @Route("/saveBarsket", name="saveBarsket")
     * @Template()
     */
public function SaveAllAction(Request $req){
    
    print 'alert("Nu skal der gemmes forsikringer")'; 
}

     /**
     * @Route("/loadBarsket", name="loadBarsket")
     * @Template()
     */

public function LoadAllAction(Request $req){
    
    print 'alert("Nu skal der hentes forsikringer")'; 
}
   
    /**
     * @Route("/showBarsket", name="showBarsket")
     * @Template()
     */
    public function visKurvAction(Request $req) {
        //echo $req;
        $ses = $this->get('session');
        $d = $ses->isStarted();

        if ($ses->has(self::SPK) === false) {
            $ses->set(self::SPK, array());
        }
        $prod = $ses->get(self::SPK);

        var_dump($prod);
        die;
    }

    /**
     * @Route("/ser", name="dsds")
     * @Method({"GET"})
     * @Template()
     */
    public function serAction(Request $req) {
      return array();
    }
        
     /**
     * @Route("/indbo", name="indbo")
     * @Method({"POST"})
     * @Template()
     */
    public function indboAction(Request $req) {
        var_dump('sdfg');
        die;
    }
    

    /**
     * @Route("/addElement", name="addElement")
     * @Template()
     */
    public function addElementToBarsketAction(Request $req) {


        $ses = $this->get('session');
        $d = $ses->isStarted();

//var_dump($req);
        if ($ses->has(self::SPK) === false) {
            $ses->set(self::SPK, array());
        }
        // unset($prod);
        $prod = $ses->get(self::SPK);
        // unset($prod);
        $prod[] = array('name' => $req->request->get('Insurance_name'), 'price' => 999999, 'type' => "optaimalt", 'ID' => "Eksempelt",);
        //var_dump($prod);
        $ses->set(self::SPK, $prod);

        return new Response(json_encode($ses->get(self::SPK)));
    }

    /**
     * @Route("/sletAlt", name="sletAlt")
     * @Template()
     */
    public function sletAction(Request $req) {

        $ses = $this->get('session');
        $antalelementer = count($ses);
        echo "antal elementer: " + $antalelementer;
        echo $antalelementer;
        if ($antalelementer == 1) {
            //echo "Du har ingen vare i indkøbskurven";
        } else {
            //    echo "Du har nu slettet dine "+ $antalelementer+" elementer";
        }
        //  unset($ses[0][0]);
        $ses->set(self::SPK, array());
        //clear('session'); 
        //unset($ses);
        $prod = $ses->get(self::SPK);
        //alert("Den bliver brugt til at slette alt");
        //var_dump($prod);
        //unset($prod);
        //unset($ses);
        //$ses->set(self::SPK, $prod);
        die;
        // return new Response('');
    }

}
