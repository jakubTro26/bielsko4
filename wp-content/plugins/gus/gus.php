<?php


class GusRegonApi{
    //adresy produkcyjne 
    protected $loginUrl = 'https://wyszukiwarkaregon.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc/ajaxEndpoint/Zaloguj';
    protected $searchDataUrl = 'https://wyszukiwarkaregon.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc/ajaxEndpoint/DanePobierzPelnyRaport';
    //adresy testowe
    protected $loginTestUrl = 'https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc/ajaxEndpoint/Zaloguj';
    protected $searchDataTestUrl = 'https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc/ajaxEndpoint/daneSzukaj';

    //tutaj wpisan klucz do GUS - obecnie testowy
    protected $key = "ca1682f755184c239f8d";
    protected $session = null;

    protected function makeCurl($field,$url){
        $curl = curl_init($url);
        
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $field);
        curl_setopt($curl, CURLOPT_ENCODING, 'UTF-8');
        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json','Content-Length: '.strlen($field), 'sid:'.$this->session]);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        //curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36');
        curl_setopt($curl, CURLOPT_HEADER, false);
        $result = curl_exec($curl);
       
        curl_close($curl);
        if($this->session==null){
            return json_decode($result)->d;
        }else{
            return str_replace('\u000d\u000a','',$result);
        }
    }

    protected function login(){
        $login = json_encode(["pKluczUzytkownika" => $this->key]);
        $result = $this->makeCurl($login,$this->loginUrl);
        
       

        return $result;
    }

    public function checkNip($nip){

        if($this->session==null){
            $this->session = $this->login();
        }


        $searchData = json_encode([
            
          
             
            'pRegon' => $nip,
                
        
            'pNazwaRaportu'=> 'BIR11OsFizycznaDaneOgolne',

            
        ]
        );

        $result = $this->makeCurl($searchData,$this->searchDataUrl);
        
        return $result;
    }


}




$gus = new GusRegonApi();

$dane = $gus->checkNip('361397510');

var_dump($dane);
