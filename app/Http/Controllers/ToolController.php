<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tool;
use App\Http\Resources\ToolResource;

class ToolController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $parameters = $request->all();
        if (isset($parameters['tag'])) {
            $tag = $parameters['tag'];
            return ToolResource::collection(
                Tool::whereHas('tags', function ($query) use ($tag) {
                    $query->where('label', 'like', $tag);
                })->get()
            );
        } else {
            return ToolResource::collection(Tool::all());
        }
    }





    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $dados = $request->all();
        $tool = new Tool();
        $tool->fill($dados);
        $tool->save();

        $tool->tags()->createMany(
            array_map(function ($tag) {
                return ['label' => $tag];
            }, $dados['tags'])
        );
        return new ToolResource($tool);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
            Tool::destroy($id);
            return '{}';    
    }
}
