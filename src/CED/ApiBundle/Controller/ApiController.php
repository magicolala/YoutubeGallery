<?php

namespace CED\ApiBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use CED\ApiBundle\Entity\Video;
use Symfony\Component\Validator\Validator;
use Doctrine\Common\Collections\ArrayCollection;

class ApiController extends Controller
{
    public function saveVideoAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $video = new Video();

        $data = $request->request;

        $video->setTitle($data->get('title'));
        $video->setVideoId($data->get('video_id'));
        $video->setDescription($data->get('video_id'));

        $em->persist($video);
        $em->flush();

        return new Response('Success');
    }
}
