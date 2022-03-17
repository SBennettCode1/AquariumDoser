CREATE TABLE [default_data]
(
	[id] UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
	[name] NVARCHAR(255) NOT NULL,
	[volume] DECIMAL(10,5) NOT NULL,
	[volume_units] NVARCHAR(255) NOT NULL,
	[quantity] DECIMAL(10,5) NOT NULL,
	[quantity_units] NVARCHAR(255) NOT NULL
)