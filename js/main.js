const panoImage = document.querySelector('.pano-image');
        const miamiPano = '../images/street.jpeg';

        const panorama = new PANOLENS.ImagePanorama(miamiPano);
        const viewer = new PANOLENS.Viewer({
            container: panoImage
        });
        viewer.add(panorama);