#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;

varying vec4 position;

void main() {
	if (position.y > 0.5)
		gl_FragColor.rgba =  vec4(1,1,0,1);
	else
	{
		gl_FragColor.rgba = vec4(0,0,1,1);
		
	}
}