$(document).ready(function(){


 <div  id="aFrameBox" class="container d-flex justify-content-center" style="width: 60%; height: 500px; padding: 20px">
                
        
                <a-scene embedded="" vr-mode-ui="enabled: false" inspector="" keyboard-shortcuts="" screenshot="">
                    
                    <a-entity id="camera" camera="" fov="80" wasd-controls-enabled="false" look-controls-enabled="false" position="0 1.5 0" look-at-position="0 0 0" rotation="-30 0 0">
                    </a-entity>
                   
                     <a-entity position="0 0 -1" rotation="0 0 0"> 
    
                            <a-sky color="#a8a8fa" material="" geometry="" scale="100" opacity=" 0.10 " ></a-sky>
                            <a-circle color="#a6aaaa"  opacity=" 0.750 "  position="-0.25 -0.5 -5.5" src="#platform" radius="4.5" rotation="-90 0 0" segments="64" material="" geometry=""></a-circle>
    
                            <a-entity position="-0 0 -2" id="API_1">
                                <a-box id="#origin" width="0.5" depth="0.5" height="0.5" position="-1.5 0 0" rotation="0 0 0" color="#ff0044" material="" geometry=""></a-box>
                                <a-box width="0.5" depth="0.5" height="0.5" position="-1 0 0" rotation="0 0 0" color="#00ff00" material="" geometry=""></a-box>
                                <a-box width="0.5" depth="0.5" height="0.5" position="-0.5 0 0" rotation="0 0 0" color="#ff0000" material="" geometry=""></a-box>
                                <a-box width="0.5" depth="0.5" height="0.5" position="0 0 0" rotation="0 0 0" color="#0000ff" material="" geometry=""></a-box>
                                <a-box width="0.5" depth="0.5" height="0.5" position="0.5 0 0" rotation="0 0 0" color="#00ff88" material="" geometry=""></a-box>
                                <a-box width="0.5" depth="0.5" height="0.5" position="1 0 0" rotation="0 0 0" color="#FF0088" material="" geometry=""></a-box>
                                <a-box width="0.5" depth="0.5" height="0.5" position="1.5 0 0" rotation="0 0 0" color="#0088FF" material="" geometry=""></a-box>
                            </a-entity>
    
                            <a-entity position="0 0 -2.5" id="API_1">
                                    <a-box id="#origin" width="0.5" depth="0.5" height="0.5" position="-1.5 0 0" rotation="0 0 0" color="#ff0044" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-1 0 0" rotation="0 0 0" color="#00ff00" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-0.5 0 0" rotation="0 0 0" color="#ff0000" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="1.5" position="0 0 0" rotation="0 0 0" color="#0000ff" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="0.5 0 0" rotation="0 0 0" color="#00ff88" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1 0 0" rotation="0 0 0" color="#FF0088" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1.5 0 0" rotation="0 0 0" color="#0088FF" material="" geometry=""></a-box>
                            </a-entity>
    
                            <a-entity position="0 0 -3" id="API_1">
                                    <a-box id="#origin" width="0.5" depth="0.5" height="0.5" position="-1.5 0 0" rotation="0 0 0" color="#ff0044" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-1 0 0" rotation="0 0 0" color="#00ff00" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-0.5 0 0" rotation="0 0 0" color="#ff0000" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="3.5" position="0 0 0" rotation="0 0 0" color="#0000ff" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="0.5 0 0" rotation="0 0 0" color="#00ff88" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1 0 0" rotation="0 0 0" color="#FF0088" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1.5 0 0" rotation="0 0 0" color="#0088FF" material="" geometry=""></a-box>
                            </a-entity>
    
                            <a-entity position="0 0 -3.5" id="API_1">
                                    <a-box id="#origin" width="0.5" depth="0.5" height="0.5" position="-1.5 0 0" rotation="0 0 0" color="#ff0044" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-1 0 0" rotation="0 0 0" color="#00ff00" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-0.5 0 0" rotation="0 0 0" color="#ff0000" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="0 0 0" rotation="0 0 0" color="#0000ff" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="7.5" position="0.5 0 0" rotation="0 0 0" color="#00ff88" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1 0 0" rotation="0 0 0" color="#FF0088" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1.5 0 0" rotation="0 0 0" color="#0088FF" material="" geometry=""></a-box>
                            </a-entity>
    
                            <a-entity position="0 0 -4" id="API_1">
                                    <a-box id="#origin" width="0.5" depth="0.5" height="0.5" position="-1.5 0 0" rotation="0 0 0" color="#ff0044" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-1 0 0" rotation="0 0 0" color="#00ff00" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="-0.5 0 0" rotation="0 0 0" color="#ff0000" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="0 0 0" rotation="0 0 0" color="#0000ff" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="0.5 0 0" rotation="0 0 0" color="#00ff88" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1 0 0" rotation="0 0 0" color="#FF0088" material="" geometry=""></a-box>
                                    <a-box width="0.5" depth="0.5" height="0.5" position="1.5 0 0" rotation="0 0 0" color="#0088FF" material="" geometry=""></a-box>
                            </a-entity>
    
                    </a-entity>        
                 
                
                    <a-entity light="spot" data-aframe-default-light="" aframe-injected=""></a-entity>
                    <a-entity light="spot" position="" data-aframe-default-light="" aframe-injected=""></a-entity>
                    
            
                </a-scene>
    
</div> 

element.appendChild(sceneGen);
});