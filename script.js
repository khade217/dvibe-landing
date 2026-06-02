$(document).ready(function() {
    
    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Navbar background on scroll
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('.navbar-custom').addClass('scrolled');
        } else {
            $('.navbar-custom').removeClass('scrolled');
        }
    });

    // Add scrolled style to navbar
    $('<style>')
        .text('.navbar-custom.scrolled { box-shadow: 0 4px 20px rgba(0,0,0,0.1); }')
        .appendTo('head');

    // Animate elements on scroll (AOS-like effect)
    function animateOnScroll() {
        $('.about-card, .feature-card').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).css({
                    'animation': 'slideInUp 0.6s ease-out forwards'
                });
            }
        });
    }

    // Add slideInUp animation
    $('<style>')
        .text(`
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `)
        .appendTo('head');

    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Call on load

    // Form submission
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        var $btn = $(this).find('button[type="submit"]');
        var originalText = $btn.text();
        
        $btn.text('Sending...').prop('disabled', true);
        
        // Simulate form submission
        setTimeout(function() {
            $btn.text('Message Sent! ✓').css('background-color', '#A3D1B5');
            setTimeout(function() {
                $btn.text(originalText).prop('disabled', false).css('background-color', '');
                $('.contact-form')[0].reset();
            }, 3000);
        }, 1500);
    });

    // Modal subscription
    $('#ctaModal .btn').on('click', function() {
        var $input = $(this).prev('.form-control');
        var email = $input.val();
        
        if(email) {
            $(this).text('Subscribed! ✓').prop('disabled', true);
            setTimeout(function() {
                $(this).text('Subscribe Now').prop('disabled', false);
                $input.val('');
            }.bind(this), 2000);
        }
    });

    // Hover effects for cards
    $('.about-card, .feature-card').hover(
        function() {
            $(this).css('transform', 'scale(1.02)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Counter animation for feature numbers
    $('[class*="feature-number"]').each(function() {
        var $this = $(this);
        var targetText = $this.text();
        
        $this.on('inview', function() {
            // Animation trigger when in view
        });
    });
});