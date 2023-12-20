create table user (
  id int primary key auto_increment not null,
  lastname varchar(50) not null,
  firstname varchar(50) not null,
  email varchar(255) not null,
  password_hash varchar(32) not null
);

create table artist (
  user_id int primary key auto_increment not null,
  biography text,
  constraint fk_artist_user
  foreign key (user_id)
  references user(id)
);

create table administrator (
  user_id int primary key auto_increment not null,
  constraint fk_administrator_user
  foreign key (user_id)
  references user(id)
);

create table logged_user (
  user_id int primary key auto_increment not null,
  constraint fk_logged_user_user
  foreign key (user_id)
  references user(id)
);

create table artwork (
  id int primary key auto_increment not null,
  title varchar(80) not null,
  technique varchar(50) not null,
  artwork_year int not null,
  format varchar(50) not null,
  source varchar(150) not null,
  user_id_ar int not null,
  constraint fk_artwork_artist
  foreign key (user_id_ar)
  references artist(user_id)
);

create table management (
  user_id_ad int not null,
  constraint fk_management_administrator
  foreign key (user_id_ad)
  references administrator(user_id),
  artwork_id int not null,
  constraint fk_management_artwork
  foreign key (artwork_id)
  references artwork(id),
  uploading_date date not null,
  approving_date date not null,
  modification_date date not null
);

create table favorite (
  user_id_lu int not null,
  constraint fk_favorite_logged_user
  foreign key (user_id_lu)
  references logged_user(user_id),
  artwork_id int not null,
  constraint fk_favorite_artwork
  foreign key (artwork_id)
  references artwork(id),
  liked boolean not null
);

create table fact (
  id int primary key auto_increment not null,
  fact text not null,
  artwork_id int not null,
  constraint fk_fact_artwork
  foreign key (artwork_id)
  references artwork(id)
);