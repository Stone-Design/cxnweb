<?php
/**
 * Template Name: CellXion Home
 * Description: V4.3.1 - Ironclad Isolation Fix for WordPress.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?> cellXion Ltd</title>
    
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    
    <?php wp_head(); ?>
</head>
<body class="home">

    <!-- <img src="https://cellxion.website/wp-content/uploads/2023/12/cxn-x.svg" id="custom-cursor" alt="Cursor"> -->

    <div id="canvas-container"></div>

    <div id="ui-layer">
        <header>
            <div class="logo">
                <img class="logo-img" src="https://cellxion.website/wp-content/uploads/2023/12/cxn-x.svg" alt="Logo">
                <div>
                    <span class="logo-text-main">CELLXION LTD</span>
                    <p class="nav-secondary">Cellular Intelligence Solutions</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="<?php echo home_url('/GDPR'); ?>">GDPR</a></li>
                    <li><a href="<?php echo home_url('/Login'); ?>">Log in</a></li>
                </ul>
            </nav>
        </header>

        <div class="hero">
            <h1>Next-Generation Connectivity</h1>
            <p>Empowering the UK and the world with cutting-edge telecommunications infrastructure.</p>
            <button class="cta-btn" onclick="location.href='<?php echo home_url('/solutions'); ?>'">Learn More</button>
        </div>

        <div class="footer-info">
            Design by Matt Stone - Iron Raven Design Studio 2026
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    
    <script>
        // Scene Setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        const networkGroup = new THREE.Group();
        scene.add(networkGroup);

        // Network Geometry
        const globe = new THREE.Mesh(
            new THREE.IcosahedronGeometry(15, 2),
            new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true, transparent: true, opacity: 0.15 })
        );
        networkGroup.add(globe);

        // Particle System
        const particlesGeometry = new THREE.BufferGeometry();
        const posArray = new Float32Array(800 * 3);
        for(let i = 0; i < 800 * 3; i++) posArray[i] = (Math.random() - 0.5) * 40;
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMesh = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({
            size: 0.15, color: 0xff3333, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
        }));
        networkGroup.add(particlesMesh);

        // Cursor Interaction
        const customCursor = document.getElementById('custom-cursor');
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            customCursor.style.opacity = '1';
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
            mouseX = (e.clientX - (window.innerWidth / 2));
            mouseY = (e.clientY - (window.innerHeight / 2));
        });

        function animate() {
            requestAnimationFrame(animate);
            networkGroup.rotation.y += 0.002 + (mouseX * 0.00005);
            networkGroup.rotation.x += 0.001 + (mouseY * 0.00005);
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
    <?php wp_footer(); ?>
</body>
</html>