#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler1;

uniform float timeFactor;
uniform float speed;
uniform int side;

void main() {
    vTextureCoord = aTextureCoord;

    vec3 offset=vec3(0.0,0.0,0.0);

    if (aVertexPosition.x > -0.49) {
        if (side == 0) {
            offset.z = -cos((-aVertexPosition.x + timeFactor * (0.5 + speed * 0.15))* 20.0) * 0.05;
        } else if (side == 1) {
            offset.z = cos((aVertexPosition.x + timeFactor * (0.5 + speed * 0.15))* 20.0) * 0.05;
        }
    }
    
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}