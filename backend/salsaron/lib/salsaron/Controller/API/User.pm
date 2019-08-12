package salsaron::Controller::Api::User;
use Mojo::Base 'Mojolicious::Controller';

# This action will render a template
sub register {
    my $self = shift;

    $self->render( text => 'User API' );
}

1;
