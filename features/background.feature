Feature: Multiple site support
  Only blog owners can post to a blog, except administrators,
  who can post to all blogs.

  Background:
    Given a variable set to 1

  Scenario: Increment by one
    When I increment the variable by 1
    Then the variable should contain 2
  Scenario: Increment by two
    When I increment the variable by 2
    Then the variable should contain 3