package salsaron::Controller::Example;
use Mojo::Base 'Mojolicious::Controller';

# This action will render a template
sub welcome {
    my $self = shift;

    # Render template "example/welcome.html.ep" with message
    $self->render(
        text => 'Welcome to the Mojolicious real-time web framework!' );

  # $self->render(msg => 'Welcome to the Mojolicious real-time web framework!');
}

1;
