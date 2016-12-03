<?php

namespace CED\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('CEDApiBundle:Default:index.html.twig');
    }
}
